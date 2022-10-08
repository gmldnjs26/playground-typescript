interface Time<T> {
  time: T;
  kind: string
}

interface DepatureTime<K> extends Time<K> {
  address: string;
  cost: K
}

var ticketTime: DepatureTime<string> = {
  time: '2days',
  address: 'Busan',
  cost: '100,000,000',
  kind: 'jejuairplane'
}

var ticketTime2: DepatureTime<number> = {
  time: 48,
  address: 'Busan',
  cost: 100000000,
  kind: 'jejuairplane'
}

// <div id="app"> Gwak </div>

var div = document.querySelector('div'); // div가 있다는 보장이 없기 때문에 innerText에 바로 접근할 수 없다.
//div.innerText
var div2 = document.querySelector('div') as HTMLDivElement; // 개발자가 타입스크립트보다 타입을 더 잘 알수 있을때 타입단언!
div2.innerText