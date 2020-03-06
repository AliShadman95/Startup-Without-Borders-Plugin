<b>Startups-Without-Borders</b>

A plugin created for the addition of Chapter section on the site of Startups-without-borders plugin

This is a plugin for wordpress that has two main roles :

- Frontend Section : Includes a shortcode [wp-reactivate] and a widget that are ready to be implemented in a Theme.
- Backend Section : Includes a Admin page that use Custom Post Types to create various contents.

More specificaly..

<b>Frontend</b> :
- The shortcode is connected to the content created in the Admin page and display it with all the details and a relative filter option.
- The widget allow to compile a registration form for creating a new chapter to be send to the CEO of the startup.

<b>Backend</b>: 
- The Admin section is dedicated to the admins of the chapters and allows to create content like Events,Teams,Sponsors,Partners,Speakers and analytics stuffs..

<b>How it works ?</b>

The plugin is divided in 3 main section: Shortcode,Widget,Admin page. All of those are a single React app. We used a boilerplate called wp-reactivate and we connect to the wp database with the API provided by them. We used some external libreries like Bootstrap,Material UI, Slick.

<b>What has been done ?</b>

- Frontend: The shortcode that displays the events,the filter option and the widget with the form UI.


- Backend: All the sections besides members,settings,analytics.

<b>What needs to be done ?</b>

Frontend:
- General: Login with wordpress functionality. Web chat. Payment method. Single chapter page.
- Shortcode: The events are missing the id of the chapters.
- Widget: The registration form is not sending the effective email to the CEO (Need some Email Sender functionality)

Backend:

- Admin: The analyticsof the chapter, members(system that allow to send multiple emails to all the members like newsletters) and settings section that let you edit the chapter page needs to be completed. Missing the invoice feature.
 


<b>Bugs</b>: 
This is the Trello board with all the bugs that need a fix:

https://trello.com/b/ElQHSy13/startup-without-borders-plugin

