import { counterReducer } from './store/reducer';

describe('Pruebas unitarias de Reducers (Jasmine)', () => {
  
  // Punto 8: Los reductores deben ser funciones puras
  it('debe retornar un nuevo estado con el tag actualizado sin mutar el original', () => {
    const initialState = { trackingCount: 0 };
    const action = { type: '[Tracking] Increment' };
    
    const newState = counterReducer(initialState, action);

    // Punto 7: Actualización reactiva de la cuenta
    expect(newState.trackingCount).toBe(1);
    // Verificación de función pura
    expect(newState).not.toBe(initialState);
  });
});
