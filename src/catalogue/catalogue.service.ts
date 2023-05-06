import { Injectable } from '@nestjs/common';
import { CreateCatalogueDto } from './dto/create-catalogue.dto';
import { UpdateCatalogueDto } from './dto/update-catalogue.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class CatalogueService {

  constructor(private prisma: PrismaService){}

  async create(createCatalogueDto: CreateCatalogueDto) {
    return await this.prisma.catalogue.create({
      data: createCatalogueDto 
    })
  }

  async findAll() {
    return await this.prisma.catalogue.findMany({})
  }

  async findOne(id: string) {
    return await this.prisma.catalogue.findFirst({
      where: {
       id
      }
    })
  }

  async update(id: string, updateCatalogueDto: UpdateCatalogueDto) {
      return await this.prisma.catalogue.update({
        where: {
          id,
        },
        data: {
          name: updateCatalogueDto.name != null ? updateCatalogueDto.name : undefined,
          description: updateCatalogueDto.description != null ? updateCatalogueDto.description : undefined,
          photo: updateCatalogueDto.photo != null ? updateCatalogueDto.price : undefined,
          price: updateCatalogueDto.price != null ? updateCatalogueDto.price : undefined,
          category: updateCatalogueDto.category != null ? updateCatalogueDto.category : undefined,
        }
      })
  }

  async remove(id: string) {
    return await this.prisma.catalogue.delete({
      where: {
        id: id
      }
    });
  }
}
