import { IsNotEmpty, IsPositive, Min } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity({ name: 'tb_produto' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Min(1)
  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: false })
  valor: number;

  @Column({ type: 'date', nullable: false })
  data_validade: Date;

  @IsNotEmpty()
  @IsPositive()
  @Column({ type: 'int', nullable: false })
  quantidade: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
