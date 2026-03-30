                                                                                                                                                                                                      
  function calculateBudget() {                                                                                                                                                                         
      const salary = parseFloat(document.getElementById('salary').value) || 0;                                                                                                                         
      const extra = parseFloat(document.getElementById('extra').value) || 0;                                                                                                                           
      const rent = parseFloat(document.getElementById('rent').value) || 0;                                                                                                                             
      const food = parseFloat(document.getElementById('food').value) || 0;                                                                                                                             
      const transport = parseFloat(document.getElementById('transport').value) || 0;                                                                                                                   
      const health = parseFloat(document.getElementById('health').value) || 0;                                                                                                                         
      const education = parseFloat(document.getElementById('education').value) || 0;                                                                                                                   
      const leisure = parseFloat(document.getElementById('leisure').value) || 0;                                                                                                                       
      const other = parseFloat(document.getElementById('other').value) || 0;                                                                                                                           
                                                                                                                                                                                                       
      const totalIncome = salary + extra;                                                                                                                                                              
      const totalExpenses = rent + food + transport + health + education + leisure + other;                                                                                                            
      const balance = totalIncome - totalExpenses;                                                                                                                                                     
                                                                                                                                                                                                       
      const formatCurrency = (value) => (isNaN(value) ? 'R$ 0,00' : `R$ ${value.toFixed(2)}`);                                                                                                         
      document.getElementById('totalIncome').textContent = formatCurrency(totalIncome);                                                                                                                
      document.getElementById('totalExpenses').textContent = formatCurrency(totalExpenses);                                                                                                            
      document.getElementById('balance').textContent = formatCurrency(balance);                                                                                                                        
                                                                                                                                                                                                       
      let advice = '';                                                                                                                                                                                 
      if (totalExpenses === 0 || balance < 0) {                                                                                                                                                        
          advice = 'Atenção! Suas despesas superam sua renda. Reveja seus gastos e corte itens não essenciais imediatamente.';                                                                         
      } else if (balance === 0) {                                                                                                                                                                      
          advice = 'Suas despesas estão equalando sua renda. Procure reduzir gastos para criar uma margem de segurança.';                                                                              
      } else if (balance > 0 && balance <= totalIncome * 0.1) {                                                                                                                                        
          advice = 'Bom! Você tem um pequeno superávit. Aumente sua poupança para criar uma reserva de emergência.';                                                                                   
      } else if (balance > totalIncome * 0.1 && balance <= totalIncome * 0.3) {                                                                                                                        
          advice = 'Excelente! Você tem um bom superávit. Considere investir 20% deste valor para multiplicar seu patrimônio.';                                                                        
      } else {                                                                                                                                                                                         
          advice = 'Fantástico! Seu orçamento está muito saudável. Mantenha o controle e invista o excedente para alcançar metas maiores.';                                                            
      }                                                                                                                                                                                                
      document.getElementById('adviceText').textContent = advice;                                                                                                                                    
                                                                                                                                                                                                       
      const chart = document.getElementById('expenseChart');                                                                                                                                           
      chart.innerHTML = '';                                                                                                                                                                            
                                                                                                                                                                                                       
      const expenses = [                                                                                                                                                                             
          { name: 'Aluguel/Moradia', value: rent },                                                                                                                                                    
          { name: 'Alimentação', value: food },                                                                                                                                                        
          { name: 'Transporte', value: transport },                                                                                                                                                    
          { name: 'Saúde', value: health },                                                                                                                                                            
          { name: 'Educação', value: education },                                                                                                                                                      
          { name: 'Lazer', value: leisure },                                                                                                                                                           
          { name: 'Outros', value: other }                                                                                                                                                             
      ];                                                                                                                                                                                               
                                                                                                                                                                                                       
      const nonZeroExpenses = expenses.filter(exp => exp.value > 0);                                                                                                                                   
                                                                                                                                                                                                       
      if (nonZeroExpenses.length === 0) {                                                                                                                                                              
          chart.innerHTML = '<li>Nenhum gasto informado</li>';                                                                                                                                       
      } else {                                                                                                                                                                                         
          nonZeroExpenses.forEach(exp => {                                                                                                                                                             
              const percentage = totalExpenses > 0 ? (exp.value / totalExpenses * 100).toFixed(1) : '0';                                                                                               
              const li = document.createElement('li');                                                                                                                                                 
              li.innerHTML = `<strong>${exp.name}:</strong> R$ ${exp.value.toFixed(2)} (${percentage}%)`;                                                                                              
              chart.appendChild(li);                                                                                                                                                                   
          });                                                                                                                                                                                          
      }                                                                                                                                                                                                
                                                                                                                                                                                                       
      document.getElementById('results').style.display = 'block';                                                                                                                                      
  }                                                                                                                                                                                                    
                                                                                                                                                                                                       
  function resetForm() {                                                                                                                                                                               
      document.querySelectorAll('#budgetForm input, #budgetForm textarea').forEach(el => el.value = '');
      document.getElementById('results').style.display = 'none';                                                                                                                                       
  }                                                                                                                                                                                                    
                      
