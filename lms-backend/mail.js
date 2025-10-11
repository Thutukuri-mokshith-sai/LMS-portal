import { Vonage } from '@vonage/server-sdk';
import dotenv from 'dotenv';

dotenv.config();

const vonage = new Vonage({
  apiKey: '9278200e',
  apiSecret: 'zb6LV8qp88qsPjaQ',
});

const from = 'VonageAPI'; // Sender ID (11 chars max)
const to = '918519905694'; // Recipient number in international format without +
const text = 'test SMS from infinity Squad LMS';

async function sendSMS() {
  try {
    const response = await vonage.sms.send({ to, from, text });
    console.log('✅ SMS sent successfully:', response.messages[0]);
  } catch (error) {
    console.error('❌ Failed to send SMS:', error);
  }
}

sendSMS();
