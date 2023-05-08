import {IsEmail, IsNotEmpty} from 'class-validator'

export class CreateUserDto {
    @IsNotEmpty()
    public name: string
    @IsEmail()
    public email: string
}
