const filtroFaturas = require("../src/filtroFaturas");

describe('filtroFaturas', () => {

    test('Se o valor da fatura for menor que 2000', () => {

        filtrofaturas = new filtroFaturas();
        let newArr = []
        
        const user1 = filtrofaturas.passaobjCliente('Tiago', '2021-10-07', 'PR');
        const user2 = filtrofaturas.passaobjCliente('Andre', '2021-08-01', 'AM');
        const fatura1 = filtrofaturas.passaobjFatura('id', 2350, '2021-12-15', user1);
        const fatura2 = filtrofaturas.passaobjFatura('id2', 1350, '2021-05-03', user2);

        newArr = filtrofaturas.colocaFaturainArray(newArr,fatura1)
        newArr = filtrofaturas.colocaFaturainArray(newArr,fatura2) 
        newArr = filtrofaturas.filtroFatura(newArr);

        const sizeArr = newArr.length;
        expect(sizeArr).toBe(1); 
    });

    test('Se o valor da fatura estiver entre 2000 e 2500 e a data for menor ou igual a de um mês atrás', () => {

        filtrofaturas = new filtroFaturas();
        let Newarr = []
        
        const user1 = filtrofaturas.passaobjCliente('Tiago', '2021-10-07', 'PR');
        const fatura1 = filtrofaturas.passaobjFatura('id', 2500, '2021-11-01', user1);
        const user2 = filtrofaturas.passaobjCliente('Andre', '2021-10-07', 'SC');
        const fatura2 = filtrofaturas.passaobjFatura('id', 2400, '2021-11-01', user2);
        Newarr = filtrofaturas.colocaFaturainArray(Newarr, fatura1)
        Newarr = filtrofaturas.colocaFaturainArray(Newarr, fatura2)
        Newarr = filtrofaturas.filtroFatura(Newarr);

        const sizeArr = Newarr.length;
        expect(sizeArr).toBe(0); 
    });

    test('Se o valor da fatura estiver entre 2500 e 3000 e a data de inclusão do cliente for menor ou igual a 2 meses atrás', () => {
        
        filtrofaturas = new filtroFaturas();
        let Newarr = []
        
        const user1 = filtrofaturas.passaobjCliente('Tiago', '2021-10-07', 'PR');
        const fatura1 = filtrofaturas.passaobjFatura('id', 3000, '2021-11-11', user1);
        Newarr = filtrofaturas.colocaFaturainArray(Newarr,fatura1)
        Newarr = filtrofaturas.filtroFatura(Newarr);

        const sizeArr = Newarr.length;
        expect(sizeArr).toBe(0); 
    });
});
