# PAGE CMS Per la modifica delle offerte

Il deploy del sito è in modalità manuale.  
Deploy significa pubblicare le modifiche fatte da pageCMS sul sito.  
Per la natura dei siti statici, ogni qualvolta viene rilevata una modifica l'intero sito viene 'ricostruito' da zero.  
Questo crea un dispendio di risorse che alla fine vanno a sottrarsi a quelle del piano gratuito, risultando nella chiusura del sito fino a fine mese, causa esaurimento crediti gratuiti.

## Pubblicare le modifiche

Una volta fatto l'accesso a page cms (https://pagescms.org/), ed apportato le modifiche necessarie, per poterle pubblicare bisogna andare su Netlify accedendo con l'account Github (che farà in automatico se l'accesso è già stato fatto una volta).  
1. Cliccare sul sito.
2.  Cliccare su 'deploys'.
3.  Cliccare su 'activate builds'.
4.  Cliccare su 'trigger deploys', e 'Deploy Project'.
Attendere, il sito sta venendo ricostruito ed inviato nei server del mondo.

Per disabilitare il deploy:  
1. Cliccare sul sito.
2. Cliccare su 'Project configuration'.
3. Cliccare su 'Build & deploy'.
4. Nella sezione Build Status cliccare su 'stopped builds'.

### Vanno sempre abilitate e poi disabilitate
