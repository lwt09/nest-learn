import { Injectable } from '@nestjs/common';
import { CreateNestTypeormDto } from './dto/create-nest-typeorm.dto';
import { UpdateNestTypeormDto } from './dto/update-nest-typeorm.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class NestTypeormService {
  // 3. 注入User实体
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  // 4. 直接使用User实体
  create(createNestTypeormDto: CreateNestTypeormDto) {
    this.userRepository.save(createNestTypeormDto);
    return 'This action adds a new nestTypeorm';
  }

  findAll() {
    return `This action returns all nestTypeorm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nestTypeorm`;
  }

  update(id: number, updateNestTypeormDto: UpdateNestTypeormDto) {
    return `This action updates a #${id} nestTypeorm`;
  }

  remove(id: number) {
    return `This action removes a #${id} nestTypeorm`;
  }
}
