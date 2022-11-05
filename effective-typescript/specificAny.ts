const numArgsBad = (...args: any) => args.length; // return 타입이 any
const numArgsGood = (...args: any[]) => args.length; // return 타입이 number
