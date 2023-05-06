import { PartialType } from '@nestjs/mapped-types';
import { CreateCatalogueDto } from './create-catalogue.dto';

export class UpdateCatalogueDto extends PartialType(CreateCatalogueDto) {
    public name?: string
    public category?: string
    public photo?: string
    public price?: string
    public description?: string
}
