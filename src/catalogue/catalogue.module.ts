import { Module } from '@nestjs/common';
import { CatalogueService } from './catalogue.service';
import { CatalogueController } from './catalogue.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [CatalogueController],
  providers: [CatalogueService, PrismaService]
})
export class CatalogueModule {}
