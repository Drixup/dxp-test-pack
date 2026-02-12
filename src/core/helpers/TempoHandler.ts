
import { format } from "@formkit/tempo";

export class TempoHandler {

  now() {
    // const c = format({
    //   date: new Date(),
    //   format: "",
    //   tz: "America/Caracas",
    // });

    // const c = format({
    //   date: new Date(),
    //   format: "YYYY-MM-DDTHH:mm:ssZ",
    //   tz: "America/Caracas",
    // });
    // console.log(c);
    // return c as any;

    return new Date();

  }

  short(date: string) {

    const l = format({
      date: date,
      format: "D MMM YYYY",
      tz: "America/Caracas",
    });
    return l;

  }

  complete(date: string) {

    const l = format({
      date: date,
      format: "D MMM YYYY - h:mm a",
      tz: "America/Caracas",
    });
    return l;

  }

}