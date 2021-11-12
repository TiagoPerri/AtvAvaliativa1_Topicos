const filtroFaturas = require("../src/filtroFaturas");

describe('filtroFaturas', () => {

    test('Se o valor da fatura for menor que 2000', () => {

        filtrofaturas = new filtroFaturas();
        let newArr = []
        
        const user1 = filtrofaturas.passaobjCliente('Tiago', '2021-10-07', 'PR');
        const fatura1 = filtrofaturas.passaobjFatura('id', 2350, '2021-12-15', user1);

        newArr = filtrofaturas.colocaFaturainArray(newArr,fatura1)
        newArr = filtrofaturas.filtroFatura(newArr);

        const sizeArr = newArr.length;
        expect(sizeArr).toBe(1); 
    });
});
