import {DateTime, Interval} from "luxon";
export function invokeFunctionAt(funcToInvoke, daysInFuture=0, hour=0, minute=0, second=0, ...functionParams) {
    const now = DateTime.local();
    const then = DateTime.fromObject({hour: hour, minute: minute, second: second}).plus({ days: daysInFuture });

    const timeout = Interval.fromDateTimes(now, then).toDuration().as("milliseconds");
    if (timeout >= 0) {
        setTimeout(funcToInvoke, timeout, ...functionParams);
    }
}