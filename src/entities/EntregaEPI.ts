import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column, JoinColumn, ManyToOne } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Funcionarios } from './Funcionarios'

@Entity("entregaEPI")
class EntregaEPI {

    @PrimaryColumn()
    id: string;

    @Column()
    funcionario_id: string;
    @JoinColumn({ name: 'funcionario_id' })
    @ManyToOne(() => Funcionarios)
    funcionario: Funcionarios

    @Column()
    nome_epi: string;

    @Column()
    data_entrega: Date;

    @Column()
    quantidade_entregue: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}
export { EntregaEPI }