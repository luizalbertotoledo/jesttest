import { getNextDays } from "./getNextDays";

describe ("Testes de tamanho o vetor", () => {
    it("Teste de validacao funcao 5 dias", () => {
        const days = getNextDays();

        expect(days.length).toBe(5);
    
    });
})

describe ("Testes dos dias retornados", () => {
    it("Teste de validacao funcao 5 dias retorna ias corretos", () => {
        const days = getNextDays();

        //expect(days.sort()).toEqual(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].sort());
        expect(days.sort()).toEqual(["05/11", "06/11", "07/11", "08/11", "09/11"].sort());

    });
})

describe ("Testes dos formatos dos dias", () => {
    it("Teste de validacao funcao 5 dias sao strings", () => {
        const days = getNextDays();
        
        expect(days.every(day => typeof day === "string")).toBe(true);

    });
})