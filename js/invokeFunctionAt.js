import {DateTime, Interval} from "luxon";
export function invokeFunctionAt(funcToInvoke, daysInFuture=0, hour=0, minute=0, second=0, ...functionParams) {
    const now = DateTime.local();
    const then = DateTime.fromObject({hour: hour, minute: minute, second: second}).plus({ days: daysInFuture });

    const timeout = Interval.fromDateTimes(now, then).toDuration().as("milliseconds");
    if (timeout >= 0) {
        setTimeout(funcToInvoke, timeout, ...functionParams);
    }
}

export function invokeFunctionEverydayAt(funcToInvoke, hour=0, minute=0, second=0, ...functionParams) {
    const now = DateTime.local();
    let then = DateTime.fromObject({hour: hour, minute: minute, second: second});
    if (now > then) {
        then = then.plus({ days: 1 });
    }

    const timeout = Interval.fromDateTimes(now, then).toDuration().as("milliseconds");
    const callback = function(...functionParams) {
        funcToInvoke(...functionParams);
        invokeFunctionEverydayAt(funcToInvoke, hour, minute, second, ...functionParams)
    };
    setTimeout(callback, timeout, ...functionParams);
}