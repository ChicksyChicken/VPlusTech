import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Define contact message schema
interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body as ContactMessage;
      
      // Simple validation
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          success: false,
          message: 'Please provide all required fields: name, email, subject, and message' 
        });
      }
      
      // Here you would typically send an email or store the contact message
      // For now, we'll just return a success response
      res.status(200).json({ 
        success: true,
        message: 'Thank you for your message. We will contact you soon!' 
      });
      
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ 
        success: false,
        message: 'An error occurred while processing your request. Please try again later.' 
      });
    }
  });

  // Product information endpoint
  app.get('/api/products', (_req, res) => {
    res.json({
      products: [
        {
          id: 'codeforge',
          name: 'CodeForge Suite',
          description: 'A powerful, lightweight code editor designed for developers who need speed and flexibility.',
          features: [
            'Intuitive, customizable interface',
            'Support for 20+ programming languages',
            'Integrated debugger and version control',
            'Extensible plugin architecture',
          ],
          isFree: true,
          releaseStatus: 'Available'
        },
        {
          id: 'datasync',
          name: 'DataSync Pro',
          description: 'An enterprise data synchronization solution designed for seamless integration between multiple databases and applications.',
          releaseStatus: 'Coming Q3 2023'
        },
        {
          id: 'cloudarch',
          name: 'CloudArch Framework',
          description: 'A comprehensive cloud architecture framework for deploying, managing, and scaling web applications.',
          releaseStatus: 'Coming Q4 2023'
        }
      ]
    });
  });

  // SixOps games information endpoint
  app.get('/api/sixops/games', (_req, res) => {
    res.json({
      games: [
        {
          id: 'quantum',
          name: 'Quantum Realm',
          description: 'An action-adventure RPG set in a futuristic quantum physics-inspired universe.',
          releaseDate: '2024'
        },
        {
          id: 'metro',
          name: 'Metro Architect',
          description: 'A city-building simulation game with realistic economics and social dynamics.',
          releaseDate: '2023'
        },
        {
          id: 'stellar',
          name: 'Stellar Voyager',
          description: 'A space exploration game featuring procedurally generated galaxies and alien civilizations.',
          releaseDate: '2024'
        }
      ]
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
