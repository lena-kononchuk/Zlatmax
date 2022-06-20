// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


//get menu on toogle
document.addEventListener("click", documentActions);

function documentActions(e) {
   const targetElement = e.target;
   if (targetElement.closest('[data-parent]')) {
      const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
      const subMenu = document.querySelector(`[ data-submenu="${subMenuId}"]`);
      const catalogMenu = document.querySelector('.catalog-header');
      if (subMenu) {

         targetElement.classList.toggle('_sub-menu-active');
         document.querySelector('._sub-menu-active') ?
            subMenu.classList.toggle('_sub-menu-open');
      } else {
         console.log('Нет такого subMenu');
      }
      e.preventDefault();

   }

}