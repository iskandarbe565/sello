
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { Model } from 'mongoose';
  import { InjectModel } from '@nestjs/mongoose';
  
  @Injectable()
  export class VendorGuard implements CanActivate {
    constructor(
      @InjectModel('Vendor') private readonly vendors: Model<any>,
    ) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const req = context.switchToHttp().getRequest();
      try {
        const vendor = await this.vendors.findById(req.id);
        if (vendor.id == req.user ) {
            return true;
        }else{
          throw new UnauthorizedException('Vendor Not Found');
        }
      } catch (error) {
        return false;
      }
    }
  }
  