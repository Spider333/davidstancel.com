import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for analytics or contact form
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Validate inputs
      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'Please provide name, email and message' 
        });
      }
      
      // Here you would typically send an email or store the contact in a database
      // For this example, we'll just return a success message
      
      return res.status(200).json({ 
        success: true, 
        message: 'Message received! I will get back to you soon.' 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      });
    }
  });

  // Analytics endpoint
  app.post('/api/analytics/pageview', (req, res) => {
    const { page, referrer } = req.body;
    
    // Here you would typically log this data to your analytics system
    console.log(`Page view: ${page}, Referrer: ${referrer}`);
    
    res.status(200).json({ success: true });
  });

  const httpServer = createServer(app);

  return httpServer;
}
