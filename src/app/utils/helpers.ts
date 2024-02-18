export function getFormattedDateTime() {
  const currentDate = new Date();

  // Obtém o dia, mês e ano
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();

  // Obtém a hora, minuto e segundo
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');

  // Formata a data e hora no formato desejado
  const formattedDate = `${day}/${month}/${year}`;
  const formattedTime = `${hours}:${minutes}`;

  // Retorna a data e hora formatadas
  return `${formattedDate} - ${formattedTime}`;
}
