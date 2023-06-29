import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'user',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    comment: '用户名',
  })
  username: string;

  @Column({
    length: 50,
    comment: '密码',
  })
  password: string;

  // date
  @CreateDateColumn()
  created_time: Date;

  @UpdateDateColumn()
  updated_time: Date;
}
