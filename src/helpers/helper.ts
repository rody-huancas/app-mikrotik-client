export const sendMessageWsp = (message: string) => {
  const wsp = 'https://api.whatsapp.com/send?phone=51963557795&text';
  const text = `Solicito información del producto ${message}, gracias.`;
  const message_send = `${wsp} ${text}`;
  return message_send;
};
