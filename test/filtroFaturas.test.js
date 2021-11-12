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
});
