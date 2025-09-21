import axios from 'axios';
import { API_BASE, API_KEY } from './config';

export default async (req: any, res: any) => {
  try {
    const response = await axios.get(`${API_BASE}/sales`, {
      params: { ...req.query, key: API_KEY },
    });

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(response.data);
  } catch (err: any) {
    res.status(err?.response?.status || 500).json({ error: err.message });
  }
}
