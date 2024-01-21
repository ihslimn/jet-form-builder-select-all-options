<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitde68f4cc9fb22e840c15c27b13186b69
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitde68f4cc9fb22e840c15c27b13186b69', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitde68f4cc9fb22e840c15c27b13186b69', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitde68f4cc9fb22e840c15c27b13186b69::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
