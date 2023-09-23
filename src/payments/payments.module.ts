import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { paymentModel } from 'src/models/payment.model';

@Module({  
  imports:[MongooseModule.forFeature([{name:"Payment",schema:paymentModel}])],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
