<?php

class LoadCommand extends \Symfony\Component\Console\Command\Command
{
    protected function configure()
    {
        $this
            ->setName('speak')
            ->setDescription('Speak something')
            ->addArgument(
                'message',
                \Symfony\Component\Console\Input\InputArgument::OPTIONAL,
                'The message to speak',
                'Hello World!'
            )
        ;
    }

    protected function execute(\Symfony\Component\Console\Input\InputInterface $input, \Symfony\Component\Console\Output\OutputInterface $output)
    {
        $message = $input->getArgument('message');
        $output->writeln($message);
        $output->writeln('Done');
        return 0;
    }
}