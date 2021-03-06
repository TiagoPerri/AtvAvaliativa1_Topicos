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

    entre2000e2500andDataMenorouIgual(fatura){
        function calcDiasentreDataAtualandDataFatura(fatura){
            const presente = new Date(); 
            const passado = new Date(fatura.dataFatura); 

            const diferenca = Math.abs(presente.getTime() - passado.getTime()); 
            const dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24)); 

            return dias;
        }

        const dias = calcDiasentreDataAtualandDataFatura(fatura); 
        if(dias <= 30 && fatura.valor >= 2000 && fatura.valor <= 2500){  
            return false; 
        }
        return true; 
    }

    entre2500e3000andDataMenorouIgual2meses(fatura){
        function calcDiasentreDataAtualandDataCliente(fatura){
            const presente = new Date();
            const passado = new Date(fatura.cliente.data); 
            
            const diferenca = Math.abs(presente.getTime() - passado.getTime()); 
            const dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24)); 
            
            return dias;
        }
        
        const dias = calcDiasentreDataAtualandDataCliente(fatura); 
        if(dias <= 60 && fatura.valor >= 2500 && fatura.valor <= 3000){
            return false;
        }
        return true;
    }

    maior4000eEstadoSulBr(fatura){
        function estadosSulBr(cliente){
            if(cliente.estado == "PR" || cliente.estado == "SC" || cliente.estado == "RS"){
                return true;
            }
            else{
                return false;
            }
        }

        let trueSul = estadosSulBr(fatura.cliente);
        if(trueSul == true && fatura.valor > 4000){  
            return false; 
        }
        return true;  
    }

    filtroFatura(faturas) { 
        let result = faturas;
        
        result = result.filter(this.menorque2000);
        result = result.filter(this.entre2000e2500andDataMenorouIgual);
        result = result.filter(this.entre2500e3000andDataMenorouIgual2meses);
        result = result.filter(this.maior4000eEstadoSulBr); 

        return result; 
    }

    colocaFaturainArray(array, fatura){
        const newarr = array;

        newarr.push(fatura);

        return newarr;
    }
}

module.exports = filtroFaturas;