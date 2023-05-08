import {IsNotEmpty} from 'class-validator'

export class CreateCatalogueDto {
    @IsNotEmpty()
    public name: string
    @IsNotEmpty()
    public category: string
    @IsNotEmpty()
    public photo: string
    @IsNotEmpty()
    public price: string
    @IsNotEmpty()
    public description: string
}
