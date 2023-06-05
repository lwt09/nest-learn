import { Injectable } from '@nestjs/common';
import { CreateMyTestDto } from './dto/create-my-test.dto';
import { UpdateMyTestDto } from './dto/update-my-test.dto';
import { PeriodGlobalService } from '../period-global/period-global.service';

@Injectable()
export class MyTestService {
  constructor(private PeriodGlobalService: PeriodGlobalService) {}
  create(createMyTestDto: CreateMyTestDto) {
    return 'This action adds a new myTest';
  }

  findAll() {
    return `This action returns all myTest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} myTest`;
  }

  update(id: number, updateMyTestDto: UpdateMyTestDto) {
    return `This action updates a #${id} myTest`;
  }

  remove(id: number) {
    return `This action removes a #${id} myTest`;
  }

  test() {
    debugger;
    console.log(this.PeriodGlobalService.getHello());
  }
}
