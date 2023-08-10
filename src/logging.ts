import { LoggerModule } from "nestjs-pino";

export const loggerModule = (
  process.env.NODE_ENV === 'dev' ? LoggerModule.forRoot({
    pinoHttp: {
      transport: {
        target: 'pino-pretty',
        options: {
          ignore: 'req.headers',
        }
      },
    }
  }) : LoggerModule.forRoot()
)
