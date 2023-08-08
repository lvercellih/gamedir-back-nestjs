import { LoggerModule } from "nestjs-pino";

let lm;

if (process.env.NODE_ENV === 'dev') {
  lm = LoggerModule.forRoot({
    pinoHttp: {
      transport: {
        target: 'pino-pretty',
        options: {
          ignore: 'req.headers',
        }
      },
    }
  })
} else {
  lm = LoggerModule.forRoot()
}

export const loggerModule = lm
