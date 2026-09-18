import express from 'express';

const app = express();
app.set("view engine", "ejs");

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, web!');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

const projects = [
  { name: 'Weather app', tag: 'javascript' },
  { name: 'Portfolio site', tag: 'express' },
  { name: 'Budget tracker', tag: 'python' },
];

app.get('/projects', (req, res) => {
  const tag = req.query.tag;

  const filterProjects = projects.filter(project => {
    if (!tag) return true;

    return project.tag === tag;
  });

  res.send(filterProjects);
});

const events = [
  { title: 'Career fair' },
  { title: 'Hackathon kickoff' },
];

app.get('/events', (req, res) => {
  res.render('events', { events });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});