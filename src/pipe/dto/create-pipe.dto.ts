import { IsInt, Length } from 'class-validator';

export class CreatePipeDto {
  @Length(1, 3)
  name: string;
  @IsInt()
  age: number;
  breed: string;
}
