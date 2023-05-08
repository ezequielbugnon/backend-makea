import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService){}

  async create({name, email}: CreateUserDto) {
    const userAlreadyExists = await this.findOne(email)

    if(userAlreadyExists){
      throw new BadRequestException()
    }

    const user = await this.prisma.user.create({
      data:{
        name,
        email,
      }
    })

    return user
  }

  async findOne(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email
      }
    })
  }

}
