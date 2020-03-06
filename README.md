<b>Startups-Without-Borders</b>

A Chapter for the Startups-without-borders plugin

This is a plugin for wordpress that has two main roles :

Frontend Section : Includes a shortcode [wp-reactivate] and a widget that is ready to be implemented in a Theme.
Backend Section : Includes a Admin page that use Custom Post Types to create various contents.

More specificaly..

Frontend :
° The shortcode is connected to the content created in the Admin page and display it with all the details and a relative filter option.
° The widget allow to compile a registration form for creating a new chapter to be send to the CEO of the startup.

Backend: 
° The Admin section is dedicated to the admins of the chapters and allows to create content like Events,Teams,Sponsors,Partners,Speakers and analytics stuffs..

How it works ?

The plugin is divided in 3 main section: Shortcode,Widget,Admin page. All of those are a single React app. We used a boilerplate called wp-reactivate and we connect to the wp database with the API provided by them. We used some external libreries like Bootstrap,Material UI, Slick.

What has been done ?

Frontend: The shortcode that displays the events,the filter option and the widget with the form UI.


Backend: All the sections besides settings and analytics.

What needs to be done ?

Frontend:
- General: Missing the login with wordpress functionality.
- Shortcode: The events are missing the id of the chapters.
- Widget: The registration form is not sending the effective email to the CEO (Need some Email Sender functionality)

Backend:

- Admin: The analytics and settings section needs to be completed. Missing the invoice feature.


Bugs: 
This is the Trello board with all the bugs that need a fix:

https://trello.com/b/ElQHSy13/startup-without-borders-plugin

