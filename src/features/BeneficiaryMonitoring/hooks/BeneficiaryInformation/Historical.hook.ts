import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IHistorical, IHistoricalFilters } from "../../../../common/interfaces/BeneficiaryInformation/Historical.interface";
import { ITableAction } from "../../../../common/interfaces/table.interfaces";

export const HistoricalHook = () => {

    const tableComponentRef = useRef(null);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [tableView, setTableView] = useState<boolean>(false);
    const [paginateData, setPaginateData] = useState({ page: "", perPage: "" });
    const {
        control,
        handleSubmit,
        register,
        reset,
        watch,
        formState: { errors, isValid },
    } = useForm();

    const urlGetHistorical = ""

    const tableActions: ITableAction<IHistorical>[] = [
        {
            icon: "view",
            onClick: (row) => {

            },
        },
    ];
    const [formWatch, setFormWatch] = useState({
        LegalizationPeriod: "",
        Status: "",
        NumberofSpecialSuspensions: "",
        NumberofTemporarySuspensions: "",
    });

    const [periodId, programId, modalityID] = watch(["periodId", "programId", "modalityID"]);

    const handleClean = () => {
        reset();
        setSubmitDisabled(true);
        tableComponentRef.current?.emptyData();
        setTableView(false);
    };

    const onSubmit = handleSubmit((filters: IHistoricalFilters) => {
        let identification = document
        tableComponentRef.current?.loadData({
            identification,
            ...filters,
        });
    });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormWatch({
            ...formWatch,
            [name]: value,
        });
    };

    return {
        onSubmit,
        control,
        handleClean,
        handleChange,
        register,
        errors,
        isValid,
        submitDisabled,
        tableView,
        tableActions,
        setPaginateData,
        tableComponentRef,
        urlGetHistorical,
    }
}

export const initHistorical =() =>{
    
}