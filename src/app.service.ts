import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async searchUserWithTextVector(search: string) {
    const query = this.userRepo.createQueryBuilder('u');

    if (search) {
      query.where('u.doc_with_index  @@ to_tsquery(:search)', {
        search: search,
      });
    }
    const res = await query.getMany();

    return res;
  }

  async searchUserWithLike(search: string) {
    const query = this.userRepo.createQueryBuilder('u');

    if (search) {
      query.where('u.name or u.email or u.username  = :search', {
        search: search,
      });
    }
    const res = await query.getMany();

    return res;
  }
}
