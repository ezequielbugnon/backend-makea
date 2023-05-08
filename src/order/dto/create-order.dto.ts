import {IsNotEmpty} from 'class-validator'

export class CreateOrderDto {
    public id?: string
    @IsNotEmpty()
    public catalogueId :string
    @IsNotEmpty()
    public userId :string
}
