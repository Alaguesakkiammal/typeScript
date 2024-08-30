import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'demo', schema: 'public'})
export class user { // Ensure class name matches your actual use case
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'title_name', type: 'varchar', length: 50, nullable: false})
  titleName: string;

  @Column({name: 'phone_number', type: 'varchar', length: 15, nullable: true})
  phoneNumber: string;

  @Column({name: 'address', type: 'varchar', length: 250, nullable: true})
  address: string;

  @Column({name: 'zip', type: 'varchar', length: 10, nullable: true})
  zip: string;

  @Column({name: 'city', type: 'varchar', length: 50, nullable: true})
  city: string;

  @Column({name: 'state', type: 'varchar', length: 50, nullable: true})
  state: string;

  @Column({name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: false})
  createdAt: Date;
}

export default user;
