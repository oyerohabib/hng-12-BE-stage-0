# HNG Stage 0 Backend Task

A simple REST API that returns basic information including email, current datetime, and GitHub repository URL.

## Description

This API is built using Node.js and TypeScript, providing a single endpoint that returns specific information in JSON format. The API handles CORS and returns the response with appropriate HTTP status codes.

## API Documentation

### Base URL

When running locally: `http://localhost:3000`

### Endpoints

#### GET /

Returns basic information including email, current datetime, and GitHub repository URL.

**Response Format:**

```json
{
  "email": "oyerohabib@yahoo.com",
  "current_datetime": "2023-09-08T12:34:56Z",
  "github_url": "https://github.com/oyerohabib/hng-12-BE-stage-0"
}
```

**Status Codes:**

- 200: Successful response
- 500: Server error

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/oyerohabib/hng-12-BE-stage-0.git
cd hng-12-BE-stage-0
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Start production server:

```bash
npm start
```

The server will start on port 3000 by default. You can modify this by setting the PORT environment variable.

## Technologies Used

- Node.js
- TypeScript
- Express.js
- CORS

## Related Resources

- [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

## License

This project is licensed under the ISC License.
