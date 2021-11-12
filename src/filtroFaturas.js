class filtroFaturas{        

    passaobjCliente(nome, data, estado){
        return ({
            nome: nome,
            data: data,
            estado: estado
        })
    }

    passaobjFatura(codigo, valor, dataFatura, cliente){
        return ({
            codigo: codigo,
            valor: valor,
            dataFatura: dataFatura,
            cliente:{
                nome: cliente.nome,
                data: cliente.data,
                estado: cliente.estado
            }
        })
    }

    menorque2000(fatura){
        return(fatura.valor > 2000);
    }

    filtroFatura(faturas) { 
        let result = faturas;
        
        result = result.filter(this.menorque2000);

        return result; 
    }

    colocaFaturainArray(array, fatura){
        const newarr = array;

        newarr.push(fatura);

        return newarr;
    }
}

module.exports = filtroFaturas;