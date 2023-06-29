import { HttpException, Injectable, Logger } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { md5 } from 'src/utils/helper';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private userModel: Repository<User>;

  private logger = new Logger();

  async register(createUserDto: CreateUserDto) {
    if (
      !(await this.userModel.findOneBy({
        username: createUserDto.username,
      }))
    ) {
      return await this.userModel.save({
        username: createUserDto.username,
        password: md5(createUserDto.password),
      });
    } else {
      throw new HttpException('用户名已存在', 200);
    }
  }

  async login(updateUser: UpdateUserDto) {
    const user = await this.userModel.findOneBy({
      username: updateUser.username,
    });
    if (user) {
      if (user.password === md5(updateUser.password)) {
        return user;
      } else {
        throw new HttpException('密码错误', 200);
      }
    } else {
      throw new HttpException('用户不存在', 200);
    }
  }
}
