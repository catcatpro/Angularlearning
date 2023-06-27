import { sequence } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription, fromEvent, interval, of, from, map, pipe, filter, catchError, retry} from 'rxjs';
import { ajax } from 'rxjs/ajax'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observable-demo';
  el?:HTMLElement 

  time = new Observable(observer => {
    setInterval(() => {
      observer.next(new Date().toString())
    }, 1000)
  })
  ngOnInit(): void {
      // this.obDemo5()
    //  this.el = document.getElementById("my-element") as HTMLElement
    //   this.obDemo6()

    // this.obDemo7()
    // this.obDemo8()
    // this.obDemo9()
    // this.obDemo10()
    // this.obDemo11()
    // this.obDemo12()
    this.obDemo13()
    this.obDemo14()
  }


  obDemo1(){
    const location = new Observable(subscriber => {
      const { next, error ,complete, unsubscribe} =  subscriber

      let watchId:any

      if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition(next, error)

      }else{
        error("Geolocation not available")
      }

      // return {unsubscribe(){
      //    navigator.geolocation.clearWatch(watchId)
      //   }}
    })
    const locationSubscription = location.subscribe({
      next:(postion) => {console.log('Current Position: ', postion)},
      error: (msg) => {
        console.log('Error Getting Location: ',msg)
      },
      complete: () =>{},

    })
    setTimeout(() => {
      // locationSubscription.unsubscribe()
    }, 10000);
  }

  obDemo2(){
    const myObservable = of(1,2,3)
    const myObserver = {
      next:(x:any) => console.log('Observer got a next value: ' + x),
      error: (err:any) => console.error("Observer got an error: "+ err),
      complete: () => console.log('Observer got a complete notifcation')
    }

    myObservable.subscribe(myObserver)
  }

  obDemo3(){
      function sequenceSubscriber(observer:Observer<number>){
        observer.next(1)
        observer.next(2)
        observer.next(3)
        observer.complete()

        return {unsubscribe(){}}
      }

      const sequence = new Observable(sequenceSubscriber)

      sequence.subscribe({
        next(num){
          console.log(num)
        },
        complete(){
          console.log("Finshed sequence")
        }
      })
  }

  obDemo4(){
    function fromEvent(target:EventTarget, eventName:string){
      return new Observable((observer) => {
        const handler = (e:any) => observer.next(e)

        target.addEventListener(eventName, handler)

        return () => {
          target.removeEventListener(eventName,handler)
        }
      })
    }

    const ESC_KEY = 27
    const nameInput = document.getElementById("name") as HTMLInputElement

    const subscription = fromEvent(nameInput, "keydown").subscribe((e: any) => {
      if(e.keyCode == ESC_KEY)
        nameInput.value = ''
    })

  }

  obDemo5(){
    function doSequence(observer:Observer<number> ,arr:number[], idx:number){
      return  setTimeout(() => {
         observer.next(arr[idx])
         if(idx == arr.length - 1){
           observer.complete()
         }else{
           doSequence(observer,arr, ++idx)
         }
       }, 1000);
     }
    function multicastSeqenceSubscriber(){
      const seq = [1,2,3]
      let timeoutId:any
      const observsers:Observer<number>[] = []

     

    
      return (observer: Observer<number>) => {
        observsers.push(observer)
        if(observsers.length === 1){
            timeoutId = doSequence({
              next(val){
                observsers.forEach(obs => obs.next(val))
              },
              complete(){
                observsers.slice(0).forEach(obs => obs.complete())
              }
            } as Observer<number>, seq,0)
        }
        return {
          unsubscribe(){
            observsers.splice(observsers.indexOf(observer), 1)
            if(observsers.length == 0){
              clearTimeout(timeoutId)
            }
          }
        }
      }
    }
    
    const multicastSeqence = new Observable(multicastSeqenceSubscriber())
    
    multicastSeqence.subscribe({
      next(num:number){ console.log("1st subscribe: " + num) },
      complete(){ console.log("1st finshed sequence")}
    })

    setTimeout(() => {
    multicastSeqence.subscribe({
        next(num){ console.log("2nd subscribe: " + num)},
        complete(){ console.log("2nd sequence finshed.")}
      })
    }, 500);
  }

  obDemo6(){
    const mouseMoves = fromEvent(this.el as HTMLElement, 'mousemove')

    const subscription = mouseMoves.subscribe((evt:any) => {
      console.log(`Coords: ${evt.clientX} X ${evt.clientY}`)

      if(evt.offsetX < 40 && evt.offsetY < 40){
        subscription.unsubscribe()
      }
    })
  }

  obDemo7(){
    const secondsCounter = interval(1500)
    const subscription =  secondsCounter.subscribe(n => {
      console.log(`It's  been ${n} seconds since subscribing!`)
      if(n == 9){
        subscription.unsubscribe()
      }
    })
  }

 obDemo8(){
    const data = from(fetch("http://www.baidu.com/"))
    data.subscribe({
      next(response){
        console.log(response)
      },
      error(err){
        console.log("Error: " + err)
      },
      complete(){
        console.log("Completed")
      }
    })
  }

  obDemo9(){
    const apiData = ajax("/api/data")
    apiData.subscribe(res => {console.log(res.status, res.response)})
  }

  obDemo10(){
    const nums = of(1,2,3)

    const sequareValues = map((val: number) =>val *val)
    const squaredNums = sequareValues(nums)

    squaredNums.subscribe(x => console.log(x))
  }

  obDemo11(){
    const nums = of(1,2,3,4,5)

    const squareOddVals = pipe(
      filter((n: number) => n % 2 != 0 ),
      map(n => n * n)
    )

    const squareOdd = squareOddVals(nums)
    squareOdd.subscribe((n) => console.log(n))
  }


  obDemo12(){

    const squareOddVals = of(1,2,3,4,5).pipe(
      filter((n: number) => n % 2 != 0 ),
      map(n => n * n)
    )

    squareOddVals.subscribe((n) => console.log(n))
  }

  obDemo13(){
    const apiData = ajax("https://api.github.com/users?per_page=5")
      .pipe(
        map(res => {
          if(!res.response){
            throw new Error("Value experted!")
          }
          return res.response
        }),
        catchError(err=> of([]))
      )

      apiData.subscribe({
        next(x) {
          console.log("data: ", x)
        },
        error(err){
          console.log("errors already caught..... will not run")
        }
      })
  }

  obDemo14(){
    const apiData = ajax("https://api.github.com/users?per_page=5")
      .pipe(
        retry(3),
        map(res => {
          if(!res.response){
            throw new Error("Value experted!")
          }
          return res.response
        }),
        catchError(err=> of([]))
      )

      apiData.subscribe({
        next(x) {
          console.log("data: ", x)
        },
        error(err){
          console.log("errors already caught..... will not run")
        }
      })
  }

  obDemo15(e:any){
    console.log(e)
  }


}


