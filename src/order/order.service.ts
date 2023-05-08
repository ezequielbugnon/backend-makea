import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService){}

  async create(createOrderDto: CreateOrderDto) {
    return await this.prisma.order.create({
      data: createOrderDto
    });
  }

  async findAll() {
    return await this.prisma.order.findMany({})
  }

  async findOne(id: string) {
    return await this.prisma.order.findFirst({
      where:{
        userId: id
      }
    })
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    return await this.prisma.order.update({
      where: {
        id
      }, 
      data: {
        userId: updateOrderDto.userId != null ? updateOrderDto.userId : undefined,
        catalogueId: updateOrderDto.catalogueId != null ? updateOrderDto.catalogueId : undefined,
      }
    })
  }

  async remove(id: string) {
    return await this.prisma.order.delete({
      where:{
        id 
      }
    })
  }

  async ordersUser(id: string) {
    return await this.prisma.order.findMany({
      where: {
        userId: id,
      },
      include: {
        catalogue: true,
      },
    })
  }

  async ordersMultiple(createOrderDto: CreateOrderDto[]) {
    return await this.prisma.order.createMany({
      data: createOrderDto
    })
  }
}
