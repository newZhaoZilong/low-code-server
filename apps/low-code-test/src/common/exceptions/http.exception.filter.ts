import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { BusinessException } from './business.exception';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        console.log('status', status);
        //处理业务异常
        if(exception instanceof BusinessException){
            const error = exception.getResponse();
            response.status(HttpStatus.OK).json({
                data: null,
                status:error['code'],
                extra:{},
                message:error['message'],
                success:false,
            })
            return;
        }
        // debugger;
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message: exception.getResponse(),
        });
    }
}

