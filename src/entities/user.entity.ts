import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
@Index('users_email', ['email'], { unique: true })
@Index('users_mobile', ['mobile'], { unique: true })
@Index('users_username', ['username'], { unique: true })
export class UserEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'varchar', nullable: true, length: 191 })
  name?: string;

  @Column({ type: 'varchar', nullable: true, length: 191 })
  username?: string;

  @Column({ type: 'varchar', nullable: true, length: 191 })
  email?: string;

  @Column({ type: 'varchar', nullable: true, length: 191 })
  mobile?: string;

  @Column({ type: 'varchar', nullable: true, length: 191 })
  password?: string;

  @Column({ type: 'varchar', nullable: true, length: 225 })
  avatar?: string;

  @Column({ type: 'smallint', default: 1 })
  status?: number;

  @Column({ type: 'text', nullable: true })
  bio?: string;

  @Column({ type: 'tsquery', select: false })
  doc_with_index: any;
}
